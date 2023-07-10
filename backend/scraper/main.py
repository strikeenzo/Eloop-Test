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
        article_content, article_title, article_url, article_img = article.text, None, None, None
        infos = article_content.split('\n')
        article_url = article.find_element(By.TAG_NAME, 'a').get_attribute('href')
        article_info = article.find_element(By.TAG_NAME, 'h2').find_element(By.XPATH, 'parent::div')
        article_title = article_info.find_element(By.TAG_NAME, 'h2').text
        article_info = article_info.find_element(By.XPATH, 'following-sibling::div[1]')
        try:
            article_img = article.find_element(By.TAG_NAME, 'img').get_attribute('src')
        except Exception as e:
            print(e)

        article_info = {
            "created_date": infos[0],
            "article_title": article_title,
            "article_content": article_info.text,
            "article_type": infos[3],
            "article_status": infos[4],
            "article_img": article_img,
            "article_url": article_url,
        }

        res["articles"].append(article_info)

    return res
