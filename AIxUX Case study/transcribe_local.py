from __future__ import annotations

import argparse
from pathlib import Path
import sys

from faster_whisper import WhisperModel


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe audio locally with faster-whisper.",
    )
    parser.add_argument("audio_file", help="Path to the audio file to transcribe.")
    parser.add_argument(
        "output_file",
        nargs="?",
        help="Optional path to save the transcript as a text file.",
    )
    parser.add_argument(
        "--model",
        default="base",
        help=(
            "Whisper model size or a local model directory. "
            "Examples: tiny, base, small, medium, large-v3, ./models/faster-whisper-base."
        ),
    )
    parser.add_argument(
        "--device",
        default="cpu",
        help="Execution device. Defaults to cpu.",
    )
    parser.add_argument(
        "--compute-type",
        default="int8",
        help="Compute type for faster-whisper. Defaults to int8 for CPU use.",
    )
    parser.add_argument(
        "--language",
        default=None,
        help="Optional language code like en, hi, fr. Auto-detect if omitted.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    audio_path = Path(args.audio_file).expanduser().resolve()

    if not audio_path.exists():
        print(f"Audio file not found: {audio_path}", file=sys.stderr)
        return 1

    model_arg = args.model
    local_model_path = Path(model_arg).expanduser().resolve()
    model_source = str(local_model_path) if local_model_path.exists() else model_arg

    model = WhisperModel(
        model_source,
        device=args.device,
        compute_type=args.compute_type,
    )

    segments, info = model.transcribe(
        str(audio_path),
        language=args.language,
    )

    transcript = " ".join(segment.text.strip() for segment in segments).strip()

    if args.output_file:
        output_path = Path(args.output_file).expanduser().resolve()
        output_path.write_text(transcript + "\n", encoding="utf-8")
        print(f"Transcript saved to {output_path}")
    else:
        print(transcript)

    print(
        f"Detected language: {info.language} (probability {info.language_probability:.2f})",
        file=sys.stderr,
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        message = str(error)
        if "403 Forbidden" in message or "LocalEntryNotFoundError" in message:
            print(
                "Model download failed. Pass a local model directory with "
                "--model /path/to/faster-whisper-model",
                file=sys.stderr,
            )
        raise
