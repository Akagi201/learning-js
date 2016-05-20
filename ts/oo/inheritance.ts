class Report {
  data: Array<string>;

  constructor(data: Array<string>) {
    this.data = data;
  }

  run() {
    this.data.forEach(function(line) { console.log(line); });
  }
}

class TabbedReport extends Report {
  headers: Array<string>;

  constructor(headers: string[], values: string[]) {
    super(values);
    this.headers = headers;
  }

  run() {
    console.log(headers);
    super.run();
  }
}

var r: Report = new Report(['First line', 'Second line']);
r.run();

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship']

var tr: TabbedReport = new TabbedReport(headers, data);
tr.run();
