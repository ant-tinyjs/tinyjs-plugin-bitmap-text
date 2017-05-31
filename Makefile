version = 0.0.1
gitlab  = git@gitlab.alipay-inc.com:tiny-plugin/tinyjs-plugin-bitmap-text.git
github  = https://github.com/ant-tinyjs/tinyjs-plugin-bitmap-text.git

qtdeploy:
	@git remote set-url origin ${gitlab}
	@git add -A .
	@git commit -am 'update'
	@git tag ${version}
	@git push origin master --tags
	@qtdeploy all
	@git remote set-url origin ${github}
