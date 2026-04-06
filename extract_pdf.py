import sys

def extract_pdf():
    pdf_path = sys.argv[1]
    
    try:
        import fitz # PyMuPDF
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        print(text)
        return
    except ImportError:
        pass

    try:
        import PyPDF2
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            print(text)
        return
    except ImportError:
        pass

    print("NO_PDF_LIB")

if __name__ == '__main__':
    extract_pdf()
