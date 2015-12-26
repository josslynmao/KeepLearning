#include <opencv/cv.h>
#include <opencv/cvaux.h>
#include <opencv/cxcore.h>
#include <opencv/highgui.h>
#include <iostream>
using namespace std;
using namespace cv;

int main( )
{
    IplImage* img = cvLoadImage("/Users/apple/Desktop",1);
    cvNamedWindow("rilakkuma",0);
    cvShowImage("rilakkuma",img);
    cvWaitKey(0);
}