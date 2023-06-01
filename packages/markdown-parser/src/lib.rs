pub mod lexer;
pub mod token;

use crate::token::Token;

#[derive(Debug)]
pub enum State {
    Neutral,
    List,
    Code,
    Quotation,
}

pub fn md_string_to_token(md_string: &str) -> Vec<Token> {
    let mut tokens: Vec<Token> = Vec::new();
    let preprocessed_md_string = md_string.to_string() + "\n";
    let split: Vec<&str> = preprocessed_md_string.split("\n").collect();
    let mut list: Vec<&str> = Vec::new();
    let mut code: String = String::from("");
    let mut quotation: String = String::from("");
    let mut state: State = State::Neutral;
    for (index, line) in (0_i64..).zip(split.iter()) {
        if lexer::match_with_quotation_regexp(line) {
            state = State::Quotation;
        }
        if let State::Quotation = state {
            if lexer::match_with_indention_regexp(line) {
                tokens.push(lexer::gen_quotation(index, &quotation));

                state = State::Neutral;
                quotation = String::from("");
                continue;
            }
            quotation += &format!("{}\n", line);
            continue;
        }

        if lexer::match_with_code_regexp(line) {
            if let State::Neutral = state {
                state = State::Code;
                code += &format!("{}\n", line);
                continue;
            }
        }
        if let State::Code = state {
            if lexer::match_with_code_regexp(line) {
                tokens.push(lexer::gen_code(index, &code));
                state = State::Neutral;
                code = String::from("");
                continue;
            }
            code += &format!("{}\n", line);
            continue;
        }

        if lexer::match_with_unorderlist_element_regxp(line) {
            state = State::List;
        }
        if let State::List = state {
            if lexer::match_with_unorderlist_element_regxp(line) {
                list.push(line);
                continue;
            }

            let list_tokens: Vec<Token> = list
                .iter()
                .map(|line| lexer::gen_list_element(index, line))
                .collect();
            tokens.push(lexer::gen_unorder_element(index - 1, list_tokens));
            state = State::Neutral;
            list = Vec::new();
        }

        if lexer::match_with_heading1_element_regxp(line) {
            tokens.push(lexer::gen_heading1_element(index, line));
        }

        if lexer::match_with_heading2_element_regxp(line) {
            tokens.push(lexer::gen_heading2_element(index, line));
        }

        if lexer::match_with_heading3_element_regxp(line) {
            tokens.push(lexer::gen_heading3_element(index, line));
        }

        if lexer::match_with_heading4_element_regxp(line) {
            tokens.push(lexer::gen_heading4_element(index, line));
        }

        if lexer::match_with_heading5_element_regxp(line) {
            tokens.push(lexer::gen_heading5_element(index, line));
        }
    }

    tokens
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let md_string =
            String::from("# Heading1\n\n## Heading2\n### Heading3\n#### Heading4\n\n- list1\n- list2\n##### Heading5\n\n```rust\nfn main() {\n  println!(\"Hello World\");\n}\n```\n\n> quotation text...\nquotaion text2...");
        let tokens = md_string_to_token(&md_string);

        println!("{:?}", tokens);
    }
}
