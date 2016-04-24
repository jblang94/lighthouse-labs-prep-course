def remove_duplicates(input_array)
	no_duplicates_array = []
	input_array.each {|value|
				no_duplicates_array.push(value) unless no_duplicates_array.include? (value)
			 }
	return no_duplicates_array
end
