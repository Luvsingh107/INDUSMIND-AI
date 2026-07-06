import re


class DocumentMetadata:

    KEYWORDS = [
        "pump",
        "compressor",
        "valve",
        "boiler",
        "heat exchanger",
        "motor",
        "bearing",
        "lubrication",
        "inspection",
        "maintenance",
        "safety",
    ]

    @classmethod
    def extract(cls, text: str):

        lower = text.lower()

        equipment = []

        for keyword in cls.KEYWORDS:
            if keyword in lower:
                equipment.append(keyword.title())

        hours = re.findall(r"\b\d+(?:,\d+)?\s*Hours\b", text)

        return {
            "equipment": sorted(set(equipment)),
            "maintenance_intervals": sorted(set(hours)),
        }