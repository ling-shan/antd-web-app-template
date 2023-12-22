#!/bin/sh

# ---------------------------------------------------------------------------
# modify these config for the target project
ClientResourcePrefix=http://poppy-web.lingyuan-tech.com
ClientAPIPrefix=http://poppy-api.lingyuan-tech.com/
ServerAddress=huser@xxxxxxxx
DeployDirectoryPath=/opt/apps/poppy-web
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
PUBLIC_URL=./ REACT_APP_POPPY_API_PREFIX=${ClientAPIPrefix} REACT_APP_WEB_MODULE_PROVIDER_URL=${ClientAPIPrefix}api/poppy/v1/web-modules npm run build
cd ./build
zip -r ./dist.zip ./*
scp -r ./dist.zip ${ServerAddress}:${DeployDirectoryPath}
rm ./dist.zip
ssh ${ServerAddress} "cd $DeployDirectoryPath && unzip -o dist.zip && rm -rf ./dist.zip"
# ---------------------------------------------------------------------------
