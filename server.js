const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// 정적 파일 서빙 (md 파일 등)
app.use('/posting', express.static(path.join(__dirname, 'posting')));
app.use('/images', express.static(path.join(__dirname, 'asset/images')));


// 1) md 파일 목록 반환 API
app.get('/api/posting/all', (req, res) => {
    const directoryPath = path.join(__dirname, 'posting/all');

    fs.readdir(directoryPath, (err, files) => {
        if (err) return res.status(500).json({ error: '디렉토리를 읽을 수 없습니다.' });

        const mdFiles = files
            .filter(file => file.endsWith('.md'))
            .map(file => `all/${file}`);

        res.json(mdFiles);  // ["all/CSS-Bem.md", "all/JS-EventLoop.md", ...]
    });
});

// 2) 특정 md 파일 내용 반환 API
app.get('/api/posting/file', (req, res) => {
    const filePath = req.query.path;
    if (!filePath) return res.status(400).json({ error: 'path 쿼리 필요' });

    const fullPath = path.join(__dirname, 'posting', filePath);

    fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: '파일을 읽을 수 없습니다.' });
        res.send(data);  // md 파일 내용 그대로 전송
    });
});

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
