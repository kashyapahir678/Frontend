
#include <stdio.h>

int recursionBinary(int arr[5],int low, int high, int element){
    
    
        while(low<=high){
            int mid = (high+low)/2;
            
            if(arr[mid] == element){
                return mid;
            }
            if(arr[mid] < element){
                return  recursionBinary( arr, mid+1, high, element);
            }
            else{
                return recursionBinary(arr,low, mid-1, element);
            }
        }
        return -1;
    
    
}

int main() {
    
    int arr[5]={2,5,8,12,45};
    int low=0;
    int high=5;
    int element=8;
    
    
    int result = recursionBinary(arr,low,high,element);
    
    if(result == -1){
        printf("element not found!");
    }
    else{
        printf("%d \t ",result);
    }
    
    
    
    
                  
    
    return 0;
}