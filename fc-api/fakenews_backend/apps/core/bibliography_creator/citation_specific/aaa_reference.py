from datetime import datetime
from .chicago_reference import ChicagoReference


class AaaReference(ChicagoReference):
    name = "AAA"

    def __init__(self, url: str, title: str, author: str, publication_date: datetime):
        super().__init__(url, title, author, publication_date)
