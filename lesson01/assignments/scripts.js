// jQuery Doc Ready
//Arrays of data:
    const datas1 = [1, 2, 3, 4, 5];
    const datas2 = [2, 4, 6, 8, 10];
    const datas3 = [3, 6, 9, 12, 15];
    const datas4 = [8, 16, 32, 64, 128];

arraydisplay= function(){
      $('.dat1').html('['+datas1[0]+','+datas1[1]+','+datas1[2]+','+datas1[3]+','+datas1[4]+']');
      $('.dat2').html('['+datas2[0]+','+datas2[1]+','+datas2[2]+','+datas2[3]+','+datas2[4]+']');
      $('.dat3').html('['+datas3[0]+','+datas3[1]+','+datas3[2]+','+datas3[3]+','+datas3[4]+']');
      $('.dat4').html('['+datas4[0]+','+datas4[1]+','+datas4[2]+','+datas4[3]+','+datas4[4]+']');
};


$(function () {
    // Set up some data and variables
        data1 = datas1,
        input1 = $('.input1'),
        submit1 = $('.submit1'),
        result1 = $('.result1');
    // Click event on the submit input
    submit1.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input1.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Use find fuction to retrieve first value that is greater than the input.
          const find1 = data1.find(x => x > val)
          // Add our new total to the page
          result1.text(find1);
          // Reset the input value to nothing
          input1.val('');
        };
      });


    // Set up some data and variables
        data2 = datas2,
        input2 = $('.input2'),
        submit2 = $('.submit2'),
        result2 = $('.result2');
    // Click event on the submit input
    submit2.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input2.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Use map function to multiply array by input value
          const map1= data2.map(x => x * val)
          // Add our new total to the page
          result2.text(map1);
          // Reset the input value to nothing
          input2.val('');
        };
      });

      // Set up some data and variables
          data3 = datas3,
          input3 = $('.input3'),
          submit3 = $('.submit3'),
          result3 = $('.result3');
      // Click event on the submit input
      submit3.on('click', function () {
          // Grab the input value and parse it into a number
          const val = input3.val();
          const num = parseInt(val);
          // Verify the user gave us a real number
          if (!isNaN(num)) {
            // Use includes to check if the value inputted is inluded in the array
            const includes1= data3.includes(val)
            // Add our new total to the page
            result3.text(includes1);
            // Reset the input value to nothing
            input3.val('');
          };
      });

      // Set up some data and variables
          data4 = datas4,
          input4 = $('.input4'),
          submit4 = $('.submit4'),
          result4= $('.result4');
      // Click event on the submit input
      submit4.on('click', function () {
          // Grab the input value and parse it into a number
          const val = input4.val();
          const num = parseInt(val);
          // Verify the user gave us a real number
          if (!isNaN(num)) {
            // Use filter function to filter for all values in the array greater than the input value
            const filter1= data4.filter(number => parseInt(number) > val)
            // Add our new total to the page
            result4.text(filter1);
            // Reset the input value to nothing
            input4.val('');
          }
      });

  });
