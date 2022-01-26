/*
*
* Copyright (c) 2022 Samiun Nafis (samiunnafis.github.io). All rights reserved.
*
* License under the GNU General Public License, Version 3.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.gnu.org/licenses/gpl-3.0.en.html
*
* Unless required by the applicable law or agreed in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// given
let a = [210, 195, 350, 360, 420, 195, 325, 340, 350, 275]

/* Sort the array in ascending order */

a.sort((a, b) => a - b)

/* Find Median */
console.log(`${a} : ${a.length}`)

console.log('Median: ' + (a[Math.floor((a.length - 1) / 2)] + a[a.length / 2]) / 2)

console.log(a[Math.floor((a.length - 1) / 2)])

console.log(a[a.length / 2])


/* Find Mean */
sum = 0
for (i = 0; i < a.length; i++) {
    sum += a[i]
}


/* Find Mode */
function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}


console.log(`Mean: ${sum / a.length} - Sum : ${sum}, Length: ${a.length}`)

console.log(`Mode: ${mode(a)}`)