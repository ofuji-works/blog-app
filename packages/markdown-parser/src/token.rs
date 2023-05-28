#[derive(Debug)]
pub enum TokenType {
    Text,
    Strong,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    UnorderList,
    List,
    Code,
    Quotation,
}

#[derive(Debug)]
pub struct Token {
    id: i64,
    elm_type: TokenType,
    contents: Option<Vec<Token>>,
    text: Option<String>,
}
impl Token {
    pub fn new(
        id: i64,
        elm_type: TokenType,
        contents: Option<Vec<Token>>,
        text: Option<String>,
    ) -> Self {
        Self {
            id,
            elm_type,
            contents,
            text,
        }
    }
}
