# -*- encoding=utf8 -*-

__all__ = ['PrintFormat']
# 开头部分：\033[显示方式;前景色;背景色m
#
# 结尾部分：\033[0m
from pythonlib.colors import modes
from pythonlib.colors import forecolors
from pythonlib.colors import backcolors


class PrintFormat(object):
    def __init__(self, mode, forecolor, backcolor):
        # 初始化必须进行配置
        self.condemner = Condemner(mode, forecolor, backcolor)
        # 审判者决定该值是否可用
        # 如果没有返回False 则使用输入值，否则按默认值输出
        mode = self.condemner.analyze_mode() if self.condemner.analyze_mode() else modes['default']
        self.mode = mode

        forecolor = self.condemner.analyze_forecolor() if self.condemner.analyze_forecolor() else forecolors[
            'white']
        self.forecolor = forecolor

        backcolor = self.condemner.analyze_backcolor() if self.condemner.analyze_backcolor() else backcolors[
            'black']
        self.backcolor = backcolor

    def printf(self, content):
        print("\033[{};{};{}m{}\033[0m".format(self.mode, self.forecolor, self.backcolor, content))

    def setmode(self, mode):
        self.mode = self.condemner.setmode(mode) if self.condemner.setmode(mode) else self.mode

    def setfore(self, forecolor):
        self.forecolor = self.condemner.setfore(forecolor) if self.condemner.setfore(forecolor) else self.forecolor

    def setback(self, backcolor):
        self.backcolor = self.condemner.setback(backcolor) if self.condemner.setback(backcolor) else self.backcolor


class Condemner(object):
    def __init__(self, mode, forecolor, backcolor):
        self.mode = mode
        self.forecolor = forecolor
        self.backcolor = backcolor

    def analyze_mode(self):
        """
        判断配置值
        :return:
        """
        if type(self.mode) is str:
            for item in modes.keys():
                if self.mode == item:
                    return modes[item]
        elif type(self.mode) is int:
            for item in modes.values():
                if self.mode == item:
                    return self.mode
        else:
            return False

    def analyze_forecolor(self):
        if type(self.forecolor) is str:
            for item in forecolors.keys():
                if self.forecolor == item:
                    return forecolors[item]
        elif type(self.forecolor) is int:
            for item in forecolors.values():
                if self.forecolor == item:
                    return self.forecolor
        else:
            return False

    def analyze_backcolor(self):
        if type(self.backcolor) is str:
            for item in backcolors.keys():
                if self.backcolor == item:
                    return backcolors[item]
        elif type(self.backcolor) is int:
            for item in backcolors.values():
                if self.backcolor == item:
                    return self.backcolor
        else:
            return False

    def setmode(self, mode):
        """实例更改显示模式的方法"""

        def change_mode(params):
            """
            判断配置值
            :return:
            """
            if type(params) is str:
                for item in modes.keys():
                    if params == item:
                        return modes[item]
            elif type(params) is int:
                for item in modes.values():
                    if params == item:
                        return params
            else:
                return False

        self.mode = change_mode(mode)
        return self.mode

    def setfore(self, forecolor):
        """实例更改前景色的方法"""

        def change_forecolor(params):
            """
            判断配置值
            :return:
            """
            if type(params) is str:
                for item in forecolors.keys():
                    if params == item:
                        print("前景色设置成功")
                        return forecolors[item]
            elif type(params) is int:
                for item in forecolors.values():
                    if params == item:
                        print("前景色设置成功")
                        return params
            else:
                return False

        self.forecolor = change_forecolor(forecolor)
        return self.forecolor

    def setback(self, backcolor):
        """实例更改背景色的方法"""

        def change_backcolor(params):
            """
            判断配置值
            :return:
            """
            if type(params) is str:
                for item in backcolors.keys():
                    if params == item:
                        return backcolors[item]
            elif type(params) is int:
                for item in backcolors.values():
                    if params == item:
                        return item
            else:
                return False

        self.backcolor = change_backcolor(backcolor)
        return self.backcolor


if __name__ == '__main__':
    obj = PrintFormat("highlight", 'blue', 'white')
    obj.printf('Hello Python')
