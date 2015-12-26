//
//  main.cpp
//  rilakkuma
//
//  Created by Josslyn Mao on 15/12/26.
//  Copyright (c) 2015年 Mao Huifeng. All rights reserved.
//

#include <opencv/cv.h>
#include <opencv/cvaux.h>
#include <opencv/cxcore.h>
#include <opencv/highgui.h>
#include <iostream>
using namespace std;
using namespace cv;

int main( )
{
    /*IplImage* img = cvLoadImage("/Users/apple/Desktop/rilakkuma.jpg",1);
    cvNamedWindow("rilakkuma",1);
    cvShowImage("rilakkuma",img);
    cvWaitKey(0);
    cvReleaseImage(&img);
    cvDestroyWindow("rilakkuma");
    return 0;*/
    float data[18] =
    {30,65,53,54,45,34,
     22,43,54,44,22,33,
     32,65,34,66,23,32};
    
    CvMat mat;
    cvInitMatHeader(&mat, 3, 6,CV_32FC1,data);//单通道
    for (int y=0; y<mat.rows; y++) {
        for (int x=0; x<mat.cols; x++) {
            float value = cvGetReal2D(&mat, y, x);
            printf("%f  ",value);
        }
        printf("\n");
    }
    
    cvInitMatHeader(&mat, 3, 3,CV_32FC2,data);//双通道
    for (int y=0; y<mat.rows; y++) {
        for (int x=0; x<mat.cols; x++) {
            CvScalar value = cvGet2D(&mat, y, x);
            printf("<%f %f >",value.val[0],value.val[1]);
        }
        printf("\n");
    }
    
    
    return 0;
    
}