(1..100).each {|num| 
		phrase = ""
		phrase += "Fizz" if num % 3 == 0
		phrase += "Buzz" if num % 5 == 0
		puts phrase.empty? ? num : phrase
	   }
