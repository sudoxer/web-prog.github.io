from pathlib import Path
from PIL import Image

TARGET_W, TARGET_H = 640, 640

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".bmp", ".tif", ".tiff", ".webp"}

def is_image_file(p: Path) -> bool:
    return p.is_file() and p.suffix.lower() in IMAGE_EXTS

def main() -> None:
    base_dir = Path(__file__).resolve().parent
    out_dir = base_dir / "out_640"
    out_dir.mkdir(parents=True, exist_ok=True)

    for p in base_dir.iterdir():
        if not is_image_file(p):
            continue

        try:
            with Image.open(p) as img:
                img = img.convert("RGB")
                resized = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

                out_path = out_dir / f"{p.stem}.jpg"
                resized.save(out_path, format="JPEG", quality=95, optimize=True)
        except Exception as e:
            print(f"skip: {p.name} - {e}")

if __name__ == "__main__":
    main()