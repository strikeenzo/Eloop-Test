from selenium.webdriver.common.by import By

from scraper.utils import create_chrome_drive_with_port, remove_session

BASE_URL = 'https://medium.com'
ACCOUNT_URL = 'https://medium.com/@eloop'

def get_data(url = ACCOUNT_URL):
    res, img_url, description = {}, None, None
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


    try:
        img_link = driver.find_element(By.CSS_SELECTOR, 'a[href*="layout_sidebar"]')
        img_url = img_link.find_element(By.TAG_NAME, 'img').get_attribute('src')
        next_div = img_link.find_element(By.XPATH, 'following-sibling::div[1]')
        title = next_div.text
        next_div = next_div.find_element(By.XPATH, 'following-sibling::div[1]')
        follower = next_div.text
        next_div = next_div.find_element(By.XPATH, 'following-sibling::div[1]')
        description = next_div.text
        print(title, follower, description)
    except Exception as e:
        print(e)
    
    print('Img URL: ', img_url)
    res['img_url'] = img_url
    res['description'] = description

    articles = driver.find_elements(By.TAG_NAME, 'article')
    res["article_count"] = len(articles)
    res["articles"] = []

    print('article count:', len(articles))

    for article in articles:
        article_content, article_url, article_img = article.text, None, None
        infos = article_content.split('\n')

        try:
            article_img = article.find_element(By.TAG_NAME, 'img').get_attribute('src')
            article_url = article.find_element(By.TAG_NAME, 'a').get_attribute('href')
        except Exception as e:
            print(e)

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
            "article_img": article_img,
            "article_url": article_url,
        }

        res["articles"].append(article_info)

    return res