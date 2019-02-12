const https = require('https');

 // 这个是页面加载完才执行的，不会阻塞，因为卸载onload里了

	document.getElementById('btn').onclick = () => {
		const options = {
		  hostname: 'www.baidu.com',
		  port: 443,
		  path: '/',
		  method: 'GET'
		};

		const req = https.request(options, (res) => {
		  console.log('statusCode:', res.statusCode);
		  console.log('headers:', res.headers);
		  console.log('结果'+res)	

		  res.on('data', (d) => {
		    process.stdout.write(d);
		    // console.log(d)
		  });
		});

		req.on('error', (e) => {
		  console.error(e);
		});
		req.end();
	}
	console.log('引用了')

	


