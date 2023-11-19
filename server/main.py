from random import randbytes
from typing import Union
import os

from databases import Database

from fastapi import FastAPI
from dotenv import load_dotenv
import asyncio

load_dotenv()

app = FastAPI()

DB_USER = os.getenv("POSTGRES_USER")
DB_PASS = os.getenv("POSTGRES_PASSWORD")

db = Database(f"postgresql://{DB_USER}:{DB_PASS}@localhost/rust_sqlx")


def create_item(id: int):
    return {"name": f"Item {id}", "id": id}

@app.get("/")
def read_root():
    return [create_item(x) for x in range(100)]


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    random_bytes = randbytes(10).hex()
    return {"item_id": item_id, "q": q, "random": random_bytes}


@app.on_event("startup")
async def startup():
    await db.connect()