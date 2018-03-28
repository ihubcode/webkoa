/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:33:32 
 * @Last Modified by:   dean.zhu86@gmail.com 
 * @Last Modified time: 2018-03-28 10:33:32 
 */

const path = require('path');
const glob = require('glob');
module.exports = {
    /**
     * 返回打包入口文件
     * globPath [string] 匹配入口目录文件
     * pathDir [string]
     */
    getEntries: function (globPath, pathDir) {
        let files = glob.sync(globPath);
        let entries = {},
            entry;
        // let dirname, basename, pathname, extname;
        // for (let i = 0; i < files.length; i++) {
        //     entry = files[i];
        //     dirname = path.dirname(entry);
        //     extname = path.extname(entry);
        //     basename = path.basename(entry, extname);
        //     pathname = path.join(dirname, basename);
        //     pathname = pathDir ? pathname.replace(pathDir, '') : pathname;
        //     console.log('pathname-pathDir: %s, %s:', pathname, pathDir);
        //     entries[pathname] = './' + entry;
        // }
        files.forEach(function(entry) {
            let basename = path.basename(entry, path.extname(entry)),
                pathname = path.dirname(entry);
                console.log('basename:', basename);
                console.log('pathname:', pathname);
            if (!entry.match(/\/js\/(lib|common)\//)) {
                let entryName = pathname.split('/').splice(3).join('/') + '/' + basename;
                entries[entryName] = pathname + '/' + basename;
            }
        });
        return entries;
    }
}