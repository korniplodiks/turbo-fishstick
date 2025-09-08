// Helper functions

function helperFunction6(x) {
    return x * 6;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction6, formatOutput, sanitizeInput };
