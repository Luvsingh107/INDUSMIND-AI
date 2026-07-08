import spacy

nlp = spacy.load("en_core_web_sm")


class EntityExtractor:

    @staticmethod
    def extract(text: str):

        doc = nlp(text)

        entities = []

        for ent in doc.ents:

            entities.append({

                "text": ent.text,

                "label": ent.label_

            })

        return entities