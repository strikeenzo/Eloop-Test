from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from scraper.main import get_data

class URL(BaseModel):
    url: str
    
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root():
    return {"data": "app is working now"}

@app.post('/')
async def get_data_stream(body: URL):
    print(body)
    medium_info = get_data(body.url)
    print(medium_info)
    return {"data": medium_info}
