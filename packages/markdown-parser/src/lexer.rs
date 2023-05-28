use crate::token::{Token, TokenType};

pub fn gen_text_element(id: i64, contents: Option<Vec<Token>>, text: Option<String>) -> Token {
    Token::new(id, TokenType::Text, contents, text)
}

pub fn gen_strong_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Strong, None, Some(text.to_string()))
}

pub fn gen_heading1_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Heading1, None, Some(text[2..].to_string()))
}

pub fn gen_heading2_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Heading2, None, Some(text[3..].to_string()))
}

pub fn gen_heading3_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Heading3, None, Some(text[4..].to_string()))
}

pub fn gen_heading4_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Heading4, None, Some(text[5..].to_string()))
}

pub fn gen_heading5_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Heading5, None, Some(text[6..].to_string()))
}

pub fn gen_unorder_element(id: i64, tokens: Vec<Token>) -> Token {
    Token::new(id, TokenType::UnorderList, Some(tokens), None)
}

pub fn gen_list_element(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::List, None, Some(text[2..].to_string()))
}

pub fn gen_code(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Code, None, Some(text.to_string()))
}

pub fn gen_quotation(id: i64, text: &str) -> Token {
    Token::new(id, TokenType::Quotation, None, Some(text.to_string()))
}

pub fn match_with_strong_regxp(text: &str) -> bool {
    text.starts_with("** ")
}

pub fn match_with_heading1_element_regxp(text: &str) -> bool {
    text.starts_with("# ")
}

pub fn match_with_heading2_element_regxp(text: &str) -> bool {
    text.starts_with("## ")
}

pub fn match_with_heading3_element_regxp(text: &str) -> bool {
    text.starts_with("### ")
}

pub fn match_with_heading4_element_regxp(text: &str) -> bool {
    text.starts_with("#### ")
}

pub fn match_with_heading5_element_regxp(text: &str) -> bool {
    text.starts_with("##### ")
}

pub fn match_with_unorderlist_element_regxp(text: &str) -> bool {
    text.starts_with("- ")
}

pub fn match_with_code_regexp(text: &str) -> bool {
    text.starts_with("```")
}

pub fn match_with_quotation_regexp(text: &str) -> bool {
    text.starts_with("> ")
}

pub fn match_with_indention_regexp(text: &str) -> bool {
    text.trim().len() == 0
}
