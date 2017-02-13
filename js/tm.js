        var s = 0;
        var m = 0;
        var h = 0;
        
        $(function sec(){
           AddSec();
            var timestring = m + " min " + s + " sec";
            
            document.getElementById("time").innerHTML = ShowTime();
            var timer = window.setTimeout(function(){sec();},1000);
        });
        
        function AddSec(){
            if (s == 59)
            {
                if (m == 59)
                {
                    h++;
                    m = 0;
                }
                else m++;
                s = 0;
            }
            else s++;
        }
        
        function ShowTime(){
                var k = 0;
                var h_ = "";
                if (h != 0)
                {
                    h_ = h.toString();
                    if (h % 100 <= 10 || h % 100 >= 15)
                    {
                        k = h % 10;
                        if (k == 0 || k >= 5 && k <= 9) h_ += " часов ";
                        if (k == 1) h_ += " час ";
                        if (k >= 2 && k <= 4) h_ += " часа ";
                    }
                    else h_ += " часов ";
                }

                var m_ = "";
                if (m != 0 || h != 0)
                {
                    m_ = m.toString();
                    if (m % 100 <= 10 || m % 100 >= 15)
                    {
                        k = m % 10;
                        if (k == 0 || k >= 5 && k <= 9) m_ += " минут ";
                        if (k == 1) m_ += " минуту ";
                        if (k >= 2 && k <= 4) m_ += " минуты ";
                    }
                    else m_ += " минут ";
                }

                var s_ = "";

                s_ = s.toString();
                if (s % 100 <= 10 || s % 100 >= 15)
                {
                    k = s % 10;
                    if (k == 0 || k >= 5 && k <= 9) s_ += " секунд ";
                    if (k == 1) s_ += " секунду ";
                    if (k >= 2 && k <= 4) s_ += " секунды ";
                }
                else s_ += " секунд ";

                return h_ + m_ + s_;
        }