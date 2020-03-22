# Web Service Development #

**EDUCATION Repository**

## First introduction to simple Web Services

We will start with **three Web Services** and three simple demonstration Scripts written in Python. We recommend to extend those scripts with User Inputs, some Interaction and also to integrate the concept of Web **Requests and Responses** to other programming languages like Java, C#, ...

### Google Autocomplete

Google provides a Webservice to autocomplete the Google Search. It's one of a few Web Services without Authentication Process, because of e.g. Google Toolbar, Firefox and other systems which are using this Autocompletion (?)

**URL**

- XML Version [https://www.google.com/complete/search?hl=de&output=toolbar&q=webservice](https://www.google.com/complete/search?hl=de&output=toolbar&q=webservice)  
- JSON Version [https://www.google.com/complete/search?hl=de&output=firefox&q=webservice](https://www.google.com/complete/search?hl=de&output=firefox&q=webservice )  (it includes a JSON Object)

**Parameters**

- `hl=<your language>`
- `output=<response type>` (in this case it referes to the client)
- `&q=<search term>`

**Use Case**

![Google Autocomplete ](google-autocomplete.png)


**Script**

- [google-autocomplete.py](google-autocomplete.py "Python Script")

**Next steps**

- Get in touch with python requests
- Use python requests also for other Webservices
- Try to transfer this simple Webservice call to other programming languages like Java, C#, ...


### Additional and recommended References

**How to use python requests modul?**

    pip3 install requests

- https://requests.readthedocs.io/en/latest/
- https://realpython.com/python-requests/
