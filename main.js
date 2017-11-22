const {app, BrowserWindow} = require('electron');
const path = require('path'); // core node js path
const url = require('url');

let win;

function createWindow()
{
	// Create browser window
	win = new BrowserWindow({width:800, height:600});

	// Load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true,
	}));

	// Open devtools on startup
	// win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

// Run create window when electron is done bootstrapping
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
	{
		app.quit();
	}
});