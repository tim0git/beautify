find . -name 'node_modules' -type d -prune -exec chmod -R +w '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'Pods' -type d -prune -exec chmod -R +w '{}' +
find . -name 'Pods' -type d -prune -exec rm -rf '{}' +
find . -name "Podfile.lock" -type f -delete
npm run fullinstall
npm run ios