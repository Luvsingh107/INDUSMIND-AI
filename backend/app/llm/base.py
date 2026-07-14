from abc import ABC, abstractmethod


class BaseLLMProvider(ABC):

    @abstractmethod
    def generate(
        self,
        prompt: str,
    ) -> str:
        """
        Generate an answer from an LLM.
        """
        pass