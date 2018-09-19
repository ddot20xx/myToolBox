import json

def save(data, path):
    s = json.dumps(data, indent=2, ensure_ascii=False)
    with open(path, 'w+', encoding='uft-8') as f:
        f.write(s)

def load(path):
    with open(path, 'r', encoding='uft-8') as f:
        s = r.read()
        return json.loads(s)

class Model(object):
    @classmethod
    def db_path(cls):
        name = cls.__name__
        path = '{}.txt'.format(name)
        return path


    @classmethod
    def all(cls):
        path = cls.db_path
        models = load(path)
        # ms = [cls(m) for m in models]
        ms = [cls._new_from_dict(m) for m in models]
        return ms


    @classmethod
    def _new_from_dict(cls, form):
        m = cls({})
        for k, v in form.items():
            setattr(m, k, v)
        return m

    @classmethod
    def new(cls, form, **kwargs):
        m = cls(form)
        for k, v in kwargs.items():
            setattr(m, k, v)
        m.save()
        return m


    @classmethod
    def get(cls, id):
        return cls.find_by(id=id)


    @classmethod
    def update(self, **kwargs):
        models = cls.all()
        index = -1
        for i, e in enumerate(models):
            if e.id == id:
                index = i
                break
        if index == -1:
            pass
        else:
            m = models[index]
            for k, v in kwargs.items():
                setattr(m, k, v)
            m.save()
            return m


    @classmethod
    def delete(cls, id):
        models = cls.all()
        index = -1
        for i, e in enumerate(models):
            if e.id == id:
                index = i
                break
        if index == -1:
            pass
        else:
            obj = models.pop(index)
            l = [m.__dict__ for m in models]
            path = cls.db_path()
            save(l, path)
            return obj


    @classmethod
    def find(cls, id):
        return cls.find_by(id=id)


    @classmethod
    def find_by(cls, **kwargs):
        k, v = '', ''
        for key, value in kwargs.items():
            k, v = key, value
        all = cls.all()
        for m in all:
            if v == m.__dict__[k]:
                return m
        return None


    @classmethod
    def find_all(cls, **kwargs):
        ms = []
        k, v = '', ''
        for key, value in kwargs.items():
            k, v = key, value
        all = cls.all()
        for m in all:
            if v == m.__dict__[k]:
                ms.append(m)
        return ms


    def save(self):
        """
        用 all 方法读取文件中所有的 model 生成一个 list
        把 self 添加进去并保存
        """
        models = self.all()
        if self.id is None:
            if len(models) == 0:
                self.id = 1
            else:
                m = models[-1]
                self.id = m.id + 1
            models.append(self)
        else:
            index = -1
            for i, e in enumerate(models):
                if e.id == self.id:
                    index = i
                    break
            models[index] = self
        l = [m.__dict__ for m in models]
        path = self.db_path()
        save(l, path)


    def __repr__(self):
        classname = self.__class__.__name__
        properties = ['{}: ({})'.format(k, v) for k, v in self.__dict__.items()]
        s = '\n'.join(properties)
        return '<{} \n{}\n'.format(classname, s)


    def json(self):
        """
        返回当前 model 的字典表示
        """
        d = self.__dict__.copy()
        return d

