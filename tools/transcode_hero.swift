import Foundation
import AVFoundation

let sourceURL = URL(fileURLWithPath: "/Users/davidsmacbookpro/Downloads/davidpolnick_site_with_authority_page/assets/video/hero-background.mov")
let outputURL = URL(fileURLWithPath: "/Users/davidsmacbookpro/Downloads/davidpolnick_site_with_authority_page/assets/video/hero-background.mp4")

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

if FileManager.default.fileExists(atPath: outputURL.path) {
    try FileManager.default.removeItem(at: outputURL)
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
    fputs("Export failed: \(exportSession.error?.localizedDescription ?? "Unknown error")\n", stderr)
    exit(1)
case .cancelled:
    fputs("Export cancelled.\n", stderr)
    exit(1)
default:
    fputs("Export ended in unexpected state: \(exportSession.status.rawValue)\n", stderr)
    exit(1)
}
