from selenium import webdriver

from selenium.webdriver.common.by import By
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

from webdriver_manager.chrome import ChromeDriverManager


def create_chrome_drive(host="localhost:8989", wait_time=10):
    opt = Options()
    opt.add_experimental_option('debuggerAddress', host)

    driver = webdriver.Chrome(service=Service(
        ChromeDriverManager().install()), options=opt)

    driver.implicitly_wait(wait_time)

    return driver


def create_chrome_drive_with_port(port=8999, data_dir="E:\\ChromeProfile\\"):
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument(f'--remote-debugging-port={port}')
    chrome_options.add_argument(f'--user-data-dir={data_dir}')
    driver = webdriver.Chrome(options=chrome_options)
    driver.set_window_size(1300, 1000)
    driver.implicitly_wait(10)
    return driver


def remove_session(driver):
    driver.delete_all_cookies()
    driver.refresh()

    driver.get("about:blank")
