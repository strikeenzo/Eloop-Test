from fastapi import FastAPI

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

from scraper.main import get_data
    
app = FastAPI()


@app.get('/')
async def root():
    return {"data": "app is working now"}

@app.post('/')
async def get_data_stream(url):
    print(url)
    medium_info = get_data(url)
    print(medium_info)
    return {"data": medium_info}
