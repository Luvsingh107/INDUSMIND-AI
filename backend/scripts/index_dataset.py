from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.append(str(ROOT))

from app.services.document_service import DocumentService

service = DocumentService()

dataset_dir = ROOT.parent / "datasets"

pdfs = sorted(dataset_dir.rglob("*.pdf"))

print(f"\nFound {len(pdfs)} PDF files\n")

success = 0
failed = 0

for pdf in pdfs:

    try:

        result = service.process_path(
            pdf,
            extract_entities=False,
        )

        if result["indexed"]:

            success += 1

            print(
                f"✓ {result['filename']} "
                f"({result['chunks']} chunks)"
            )

        else:

            print(
                f"• Skipped {pdf.name}"
            )

    except Exception as e:

        failed += 1

        print(f"✗ {pdf.name}")
        print(e)

print("\n------------------------------")
print(f"Indexed : {success}")
print(f"Failed  : {failed}")
print("------------------------------")