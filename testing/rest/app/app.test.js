const app = require("./app");
const supertest = require("supertest");

describe("end2end testing", () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it("should return 3 notes on GET", async () => {
    const response = await request.get("/notes");
    const json = JSON.parse(response.text);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(json.notes.length).toBe(3);
  });

  it("should add a new entry on valid POST", async () => {
    const response = await request
                              .post("/notes")
                              .send({ title: "testing", description: "automation testing" });
    
    fail("implement me...");
  });
});

/**
 * Example Response from supertest...
{
  header: {
    connection: "close",
    "content-length": "235",
    "content-type": "application/json; charset=utf-8",
    date: "Thu, 23 Apr 2020 13:26:46 GMT",
    etag: 'W/"eb-56ncnmAl9D8OPBf6+c+/y6H9lzI"',
    "x-powered-by": "Express",
  },
  req: {
    data: undefined,
    headers: { "user-agent": "node-superagent/3.8.3" },
    method: "GET",
    url: "http://127.0.0.1:37573/notes",
  },
  status: 200,
  text:
    '{"notes":[{"id":1,"title":"my first note","description":"this is my first note"},{"id":2,"title":"learn testing","description":"learn how to test REST-APIs"},{"id":3,"title":"buy coffee","description":"need more coffee to code well"}]}',
}

  */
