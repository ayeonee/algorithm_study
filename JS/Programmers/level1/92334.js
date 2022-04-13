// 2022 KAKAO BLIND RECRUITMENT > 신고 결과 받기

function solution(id_list, report, k) {
  const id_mail = id_list.map((v) => [v, 0]);
  const reportMap = new Map();
  const new_report = [...new Set(report)];

  new_report.forEach((v) => {
    const [name, reported] = v.split(" ");
    const mapValue = reportMap.get(reported);
    if (!mapValue)
      reportMap.set(reported, {
        cnt: 1,
        reporter: name,
      });
    else {
      reportMap.set(reported, {
        ...mapValue,
        cnt: mapValue.cnt + 1,
        reporter: mapValue.reporter + ` ${name}`,
      });
    }
  });

  reportMap.forEach((value) => {
    if (value.cnt >= k) {
      const reporterArray = value.reporter.split(" ");
      reporterArray.forEach((v) => {
        for (let i = 0; i < id_mail.length; i++) {
          if (v === id_mail[i][0]) {
            id_mail[i][1]++;
            return;
          }
        }
      });
    }
  });

  return id_mail.map((v) => v[1]);
}
