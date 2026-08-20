# Important JavaScript String Methods

Here is a quick-reference guide to the most essential JavaScript string methods used frequently in Frontend Web Development.

## 1. Searching and Matching
* **`indexOf(substring)`**: Returns the index of the first occurrence of a value, or `-1` if not found.
* **`includes(substring)`**: Checks if a string contains a specified value (returns `true` or `false`).
* **`startsWith(substring)` / `endsWith(substring)`**: Checks if a string begins or ends with a specific character sequence.

## 2. Extracting Parts of a String
* **`slice(start, end)`**: Extracts a section of a string and returns it as a new string without modifying the original.
* **`substring(start, end)`**: Similar to slice, but handles negative indices differently (treats them as 0).

## 3. Modifying Strings
* **`toUpperCase()` / `toLowerCase()`**: Converts the entire string to upper or lower case.
* **`trim()`**: Removes whitespace from both ends of a string.
* **`replace(searchFor, replaceWith)`**: Replaces the first match of a pattern with a replacement string.
* **`replaceAll(searchFor, replaceWith)`**: Replaces all matches of a pattern.

## 4. Splitting and Converting
* **`split(separator)`**: Splits a string into an array of substrings based on a specified separator.
