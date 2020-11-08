# URL Shortener Microservice

<a href="https://brendobrien-shorturl.herokuapp.com">https://brendobrien-shorturl.herokuapp.com</a>

## Upgrading to heroku 18

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack#upgrading-an-app

```
heroku stack:set heroku-18 -a brendobrien-shorturl
heroku git:remote -a brendobrien-shorturl
git commit --allow-empty -m "Upgrading to heroku-18" && git push heroku master
```

```
git rm --cached .env
```
