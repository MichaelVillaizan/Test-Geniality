
export default function stringRepair(string){
    while(string.indexOf('&ldquo;') !== -1){
        string = string.replace('&ldquo;', '”');
    }
    while(string.indexOf('&rdquo;') !== -1){
        string = string.replace('&rdquo;', '“');
    }
    while(string.indexOf('&quot;') !== -1){
        string = string.replace('&quot;', '"');
    }
    while(string.indexOf('&quot;') !== -1){
        string = string.replace('&quot;', '"');
    }
    while(string.indexOf('&ocirc;') !== -1){
        string = string.replace('&ocirc;', 'ô');
    }
    while(string.indexOf("&#039;") !== -1){
        string = string.replace("&#039;", "'");
    }

    return string;
} 