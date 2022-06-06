# 本地存储

> **一般支持存储5MB的数据。**

## 存值

**localStorage.setItem("name", "value")**

## 取值

**localStorage.getItem("name")**

## 移除

**localStorage.removeItem("name")**

## 清空

**localStorage.clear()**

> **注意事项：获取不到的值或JSON.parse(null)的结果会是null，本地窗口或浏览器关闭，本地存储里面的值还会存在，需要手动清除。**

# 本地会话

> **一般支持存储5MB的数据。**

## 存值

**sessionStorage.setItem("name", "value")**

## 取值

**sessionStorage.getItem("name")**

## 移除

**sessionStorage.removeItem("name")**

## 清空

**sessionStorage.clear()**

> **获取不到的值或JSON.parse(null)的结果会是null，本地窗口或浏览器关闭，会话存储里面的内容全都会自动清空掉。**