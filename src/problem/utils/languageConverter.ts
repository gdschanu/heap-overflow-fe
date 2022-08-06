function convertName(string: string) {
    string = string.replace(/\s/g, '').toLowerCase()
    if (['java'].includes(string))
        return 'java'
    if (['javascript', 'js'].includes(string))
        return 'javascript'
    if (['typescript', 'ts'].includes(string))
        return 'typescript'
    if (['c'].includes(string))
        return 'c'
    if (['cpp', 'c++', 'cplusplus'].includes(string))
        return 'cpp'
    if (['c#', 'csharp'].includes(string))
        return 'csharp'
    if (['python', 'py'].includes(string))
        return 'python'
    if (['ruby', 'rb'].includes(string))
        return 'ruby'
    if (['php'].includes(string))
        return 'php'
    if (['swift'].includes(string))
        return 'swift'
    if (['kotlin'].includes(string))
        return 'kotlin'
    if (['go'].includes(string))
        return 'go'
    if (['html', 'html5'].includes(string))
        return 'html'
    if (['css', 'css3'].includes(string))
        return 'css'
    if (['sql'].includes(string))
        return 'sql'
    if (['markdown', 'md'].includes(string))
        return 'markdown'
    if (['json'].includes(string))
        return 'json'
    return 'text'
}

export default function(input: string) {
    return convertName(input)
}