from selenium.webdriver.common.by import By

from utils import create_chrome_drive_with_port, remove_session

BASE_URL = 'https://medium.com'
ACCOUNT_URL = 'https://medium.com/@eloop'

def get_data(url = ACCOUNT_URL):
    res = {}
    print('Scraper started')
    
    driver = create_chrome_drive_with_port()

    print('Driver instance created')

    remove_session(driver)

    driver.get(url)

    title = driver.find_element(By.CSS_SELECTOR, ".pw-author-name span").text
    print('title: ', title)
    res["title"] = title

    follower = driver.find_element(By.XPATH, '//a[contains(text(), "Followers")]').get_attribute('innerHTML')
    print('follower: ', follower)
    res["follower"] = follower

    articles = driver.find_elements(By.TAG_NAME, 'article')
    res["article_count"] = len(articles)
    res["articles"] = []

    print('article count:', len(articles))

    for article in articles:
        article_content = article.text
        infos = article_content.split('\n')

        print('Date', infos[0])
        print('Article Title', infos[1])
        print('Article Content', infos[2])
        print('Article Type', infos[3])
        print('Article Status', infos[4])

        article_info = {
            "created_date": infos[0],
            "article_title": infos[1],
            "article_content": infos[2],
            "article_type": infos[3],
            "article_status": infos[4],
        }

        res["articles"].append(article_info)

    return res

get_data()