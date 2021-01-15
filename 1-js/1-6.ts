/**
 * # 55 XHMLHttpRequest, fetch('/server').then(json => json)
 */
export const fetch =  (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(this.response);
      }
    };
    xhr.setRequestHeader('Accept', "application/json");
    xhr.withCredentials = true;
    xhr.send();
  });
}