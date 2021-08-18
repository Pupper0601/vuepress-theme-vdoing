# web UI 自动化实战

## 一、 项目结构

>   整体的编写逻辑:
>
>   ​    1、先设计功能测试用例
>
>   ​    2、然后分析这个用例,用到了那些页面,哪些元素,封装在 pages
>
>   ​    3、将功能测试用例翻译成代码

![image-20210818163640039](https://pupperc.com/img/20210818163640.png)

#### 四包文件 ：

-   `libs` ： 用于存放 基本的 代码；
-   `configs` ： 用于存放 配置文件；
-   `test_case` ： 用于存放 测试用例；
-   `tools` ： 用于存放 封装的 工具

#### 四文件夹：

-   `docs` ： 主要用于存放 和项目相关的文件；
-   `logo` ： 主要用于存放 项目执行的日志；
-   `report` ： 用于存放报告的 原始数据；
-   `data` ： 用于存放 测试数据；

## 二、 项目内容

### 1. configs

#### 初始化浏览器对象 --- myDriver.py

```python
from utils.mySettings import url, username, password, implicitly_time_out
from selenium import webdriver

class Driver:
    # 初始化为空
    _driver = None
	
    # 私有化方法，子类不可用
    @classmethod		
    def get_driver(cls, browser_name="chrome"):
        """
        获取浏览器对象
        :param browser_name: 浏览器类型
        :return:
        """
        if cls._driver is None:
            if browser_name == "chrome":
                cls._driver = webdriver.Chrome()
            elif browser_name == "firefox":
                cls._driver = webdriver.Firefox()
            # ....
            else:
                raise ("没找到浏览器类型 %s, 请检查传参" % browser_name)

            cls._driver.implicitly_wait(implicitly_time_out)
            cls._driver.maximize_window()
            cls._driver.get(url)
            cls.__login()

        return cls._driver

    @classmethod
    def __login(cls):
        cls._driver.find_element_by_id("username").send_keys(username)
        cls._driver.find_element_by_id("password").send_keys(password)
        cls._driver.find_element_by_id("btnLogin").click()


if __name__ == '__main__':
    Driver.get_driver()
```

#### 配置项目环境 --- mySettings.py

```python
# 指向当前环境
current_env = "pro"

# 项目网址
env_dict = {
    "test": "dsadasd",
    "uat": "dsadsad",
    "pro": "http://120.55.190.222:38090/#/login"
}

# 当前项目的网址
url = env_dict[current_env]

# 账号和密码
username = "老师"
password = "123456"

# 隐式等待的超时时间
implicitly_time_out = 5
# 显示等待超时时间
time_out = 5
# 显示等待轮询时间
poll_frequency = 0.5

```

#### 项目目录 --- pathSettings.py

```python
import time
import os

# 这是项目的根路径
base_dir = os.path.dirname(os.path.dirname(__file__))

# 测试用例报告所在目录
report_path = os.path.join(base_dir, "report", time.strftime("%y-%m-%d"))
```

### 2. libs

>   UI自动化一般采用 **`元素定位`** 与 **`元素操作`**分离的方法编写代码

```python
"""添加商品页面"""

from pages.basepage import BasePage
from publicLib.public import ran_str
import time

# 页面元素定位
class AddProductPage(BasePage):

    def __init__(self):
        super().__init__()  # 执行父类的构造方法
        self.url = "http://120.55.190.222:38090/#/pms/addProduct"

    def product_classification_select_box(self):
        """商品分类下拉框, 外框"""
        return self.driver.find_element_by_css_selector("form > div:nth-child(1) .el-cascader__label")

    def product_classification_select_box_idx1(self, idx1):
        """商品分类下拉框, 一级分类"""
        return self.driver.find_element_by_css_selector("ul.el-cascader-menu > li:nth-child(%s)" % idx1)

    def product_classification_select_box_idx2(self, idx2):
        """商品分类下拉框, 二级分类"""
        return self.driver.find_element_by_css_selector("ul + ul.el-cascader-menu > li:nth-child(%s)" % idx2)

    def product_name_input_box(self):
        """商品名称输入框"""
        return self.driver.find_element_by_css_selector("label[for=\"name\"] + div input")

    def product_subtitle_input_box(self):
        """副标题输入框"""
        return self.driver.find_element_by_css_selector("label[for=\"subTitle\"] + div input")

    def product_brand_select_box(self):
        """商品品牌下拉框外框"""
        return self.driver.find_element_by_css_selector("label[for=\"brandId\"] + div input")

    def product_brand_select_box_option(self, idx):
        """商品品牌下拉框, 一级分类"""
        return self.driver.find_element_by_css_selector("body > div:nth-child(8) ul > li:nth-child(%s)" % idx)

    def next_step_commodity_promotion_button_box(self):
        """下一步, 填写商品促销按钮"""
        return self.driver.find_element_by_xpath("//*[text()=\"下一步，填写商品促销\"]")

    def is_herald_box(self):
        """预告商品开关"""
        return self.driver.find_element_by_xpath("//*[text()=\"预告商品：\"]/..//span")

    def next_step_product_attribute_button_box(self):
        """下一步, 填写商品属性按钮"""
        return self.driver.find_element_by_xpath("//*[text()=\"下一步，填写商品属性\"]")

    def next_step_choose_product_related_button_box(self):
        """下一步, 选择商品关联按钮"""
        return self.driver.find_element_by_xpath("//*[text()=\"下一步，选择商品关联\"]")

    def submit_product_button_box(self):
        """完成, 提交商品按钮"""
        return self.driver.find_element_by_xpath("//*[text()=\"完成，提交商品\"]")

    def confirm_submission_box(self):
        """确认提交按钮"""
        return self.driver.find_element_by_css_selector(
            "[class=\"el-button el-button--default el-button--small el-button--primary \"]")

# 页面元素操作
class AddProductPageAction(AddProductPage):

    def add_product_action(self, idx1, idx2, product_name, subtitle, brand_select_idx):
        """
        添加一个商品
        :param idx1: 商品分类一级分类下标
        :param idx2: 商品分类二级分类下标
        :param product_name: 商品名称
        :param subtitle: 商品副标题
        :param brand_select_idx: 商品品牌一级分类下标
        :return:
        """
        self.to_page(3, self.url)
        self.driver.refresh()
        # 点击商品分类下拉外框
        self.product_classification_select_box().click()
        # 选择商品分类, 一级分类
        self.product_classification_select_box_idx1(idx1).click()
        # 选择二级分类
        self.product_classification_select_box_idx2(idx2).click()
        # 输入商品名称
        self.product_name_input_box().send_keys(product_name)
        # 输入副标题
        self.product_subtitle_input_box().send_keys(subtitle)
        # 点击商品品牌下拉框外框
        self.product_brand_select_box().click()
        # 选择商品品牌一级分类
        self.product_brand_select_box_option(brand_select_idx).click()
        # 点击[下一步,填写商品促销]按钮
        self.next_step_commodity_promotion_button_box().click()
        # 点击是否预告商品开关
        self.is_herald_box().click()
        # 点击[下一步, 填写商品属性]按钮
        self.next_step_product_attribute_button_box().click()
        # 点击下一步, 选择商品关联按钮
        self.next_step_choose_product_related_button_box().click()
        time.sleep(0.3)
        # 点击完成,提交商品按钮
        self.submit_product_button_box().click()
        # 确认提交
        self.confirm_submission_box().click()


AddProductPageActionObj = AddProductPageAction()

if __name__ == '__main__':
    AddProductPageActionObj.add_product_action(1, 1, "测试%s" % ran_str(5), "测试%s" % ran_str(5), 1)

```

### 3. tools

#### 浏览器公共类 --- basePage.py

```python
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait
from utils.mySettings import time_out, poll_frequency
from utils.myDriver import Driver
import time


class BasePage:
    def __init__(self):
        # 获取浏览器对象
        self.driver = Driver.get_driver()
        
    def get_element(self, locator):
        """
        走显示等待的逻辑，寻找元素
        :param locator: 元素定位的方法和表达式，以元组形式传入，示例(By.ID, "abc")
        :return:
        """
        WebDriverWait(
            # 传入浏览器对象
            driver=self.driver,
            # 传入超时时间
            timeout=time_out,
            # 设置轮询时间
            poll_frequency=poll_frequency).until(
            # 检查元素被加载并可见
            ec.visibility_of_element_located(locator))

        return self.driver.find_element(*locator)

    def to_page(self, time_wait, url):
        """
        页面刷新
        """
        time.sleep(time_wait)
        self.driver.get(url)

```

#### 公共方法 --- public.py

```python
from utils.pathSettings import report_path
import random
import string
import time
import os


def new_report():
    """
    生成最新的测试报告文件，此处只返回路径
    :return:
    """
    # 获取一个格式化的，当前的时间日期
    file_name = time.strftime("%y-%m-%d_%H_%M_%S")
    # 拼接路径
    ret_path = os.path.join(report_path,file_name)

    return ret_path


def ran_str(num):
    """
    随机生成 num 个字符串
    :param num:
    :return:
    """
    str1 = string.ascii_letters  # 返回26个英文大小写字母的字符串
    str2 = string.digits  # 返回阿拉伯数字的字符串
    salt = "".join(random.sample("%s%s" % (str1, str2), num))

    # salt = "".join(random.sample(string.ascii_letters + string.digits, num))

    return salt


if __name__ == '__main__':
    print(new_report())

```

### 4. test_case

```python
from libs.productListPage import ProductListPageActionObj
from libs.addProductPage import AddProductPageActionObj
from tools.public import ran_str
import allure
import time

"""
可以将一个场景下的case，都维护在一个py里边
每个测试用例，都写一个对应的测试函数
"""


class TestAddProductCase:

    def test_add_product_case(self):
        """添加商品后, 商品列表的第一个商品名称就是我们添加的"""
        with allure.step("添加一个商品"):  # 这一个代码块，会在测试报告中，以一个步骤的形式展现
            product_name = "自动化%s" % ran_str(5)
            # 描述一段文本进测试报告
            allure.attach("新增的商品名称是%s" % product_name, "./a.txt", attachment_type=allure.attachment_type.TEXT)

            # 添加一个商品
            AddProductPageActionObj.add_product_action("1", "1", product_name, "副标题%s" % ran_str(5), "1")

        with allure.step("进入商品列表"):
            # 进入商品列表页面
            ProductListPageActionObj.to_page(3, ProductListPageActionObj.url)

            time.sleep(3)
            # 截个图，保存进测试报告里边
            ProductListPageActionObj.driver.get_screenshot_as_file("./a.png")
            allure.attach.file("./a.png", attachment_type=allure.attachment_type.PNG)

        with allure.step("获取第一个商品的名称"):
            # 获取商品列表第一个商品的名称
            first_product_name = ProductListPageActionObj.first_tr_product_name_txt_box().text

        with allure.step("执行断言"):
            assert product_name == first_product_name
```

