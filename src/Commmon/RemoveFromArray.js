import React from 'react';

export default function RemoveFromArray(arr, elt){
    for(var i = arr.length-1; i>=0 ;i--){
        if (arr[i] === elt){
            arr.splice(i,1);
        }
    }
}