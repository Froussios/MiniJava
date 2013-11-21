module types

imports

	assignment1/MiniJava
	analysis/desugar
	
type rules
	
	// Literals
	
	IntValue(v): Int()
	False : Bool()
	True : Bool()
	
	// Unary Expressions
	
	UnExp(op, e) : ty
		where op : (opin, ty)
		and e : ety
		and ety == opin
	
	NOT() : (Bool(), Bool())
	LENGTH() : (IntArray(), Int())
	NEWARRAY() : (Int(), IntArray())
	
	// Binary Expressions
	
	BinExp(op, e1, e2) : ty
		where op : (opin1, opin2, ty)
		and e1: ety1
		and ety1 == opin1
		and e2: ety2
		and ety2 == opin2
	
	ADD() : (Int(), Int(), Int())
	SUB() : (Int(), Int(), Int())
	MUL() : (Int(), Int(), Int())
	LT() : (Int(), Int(), Bool())
	AND() : (Bool(), Bool(), Bool())
	SUBSCRIPT() : (IntArray(), Int(), Int()) //TODO: probably not working
	
	