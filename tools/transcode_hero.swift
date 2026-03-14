import Foundation
import AVFoundation

let fileManager = FileManager.default
let currentDirectoryURL = URL(fileURLWithPath: fileManager.currentDirectoryPath)
let projectRootURL = currentDirectoryURL
let arguments = CommandLine.arguments

let sourceURL: URL
if arguments.count > 1 {
    sourceURL = URL(fileURLWithPath: arguments[1], relativeTo: currentDirectoryURL).standardizedFileURL
} else {
    sourceURL = projectRootURL.appendingPathComponent("assets/video/hero-background.mov")
}

let outputURL: URL
if arguments.count > 2 {
    outputURL = URL(fileURLWithPath: arguments[2], relativeTo: currentDirectoryURL).standardizedFileURL
} else {
    outputURL = projectRootURL.appendingPathComponent("assets/video/hero-background.mp4")
}

guard fileManager.fileExists(atPath: sourceURL.path) else {
    fputs("Source video not found: \(sourceURL.path)\n", stderr)
    exit(1)
}

let asset = AVURLAsset(url: sourceURL)

guard let exportSession = AVAssetExportSession(asset: asset, presetName: AVAssetExportPreset1920x1080) else {
    fputs("Failed to create AVAssetExportSession.\n", stderr)
    exit(1)
}

let supportedTypes = exportSession.supportedFileTypes
guard supportedTypes.contains(.mp4) else {
    let joined = supportedTypes.map(\.rawValue).joined(separator: ", ")
    fputs("MP4 export not supported. Supported types: \(joined)\n", stderr)
    exit(1)
}

if fileManager.fileExists(atPath: outputURL.path) {
    try fileManager.removeItem(at: outputURL)
}

exportSession.outputURL = outputURL
exportSession.outputFileType = .mp4
exportSession.shouldOptimizeForNetworkUse = true

let semaphore = DispatchSemaphore(value: 0)

exportSession.exportAsynchronously {
    semaphore.signal()
}

semaphore.wait()

switch exportSession.status {
case .completed:
    print("Export completed: \(outputURL.path)")
case .failed:
    let errorDescription = exportSession.error.map { "\($0.localizedDescription) (\($0))" } ?? "Unknown error"
    fputs("Export failed: \(errorDescription)\n", stderr)
    exit(1)
case .cancelled:
    fputs("Export cancelled.\n", stderr)
    exit(1)
default:
    fputs("Export ended in unexpected state: \(exportSession.status.rawValue)\n", stderr)
    exit(1)
}
