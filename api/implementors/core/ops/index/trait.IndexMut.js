(function() {var implementors = {};
implementors["cranelift_codegen"] = [{"text":"impl IndexMut&lt;Inst&gt; for DataFlowGraph","synthetic":false,"types":[]},{"text":"impl IndexMut&lt;StackSlot&gt; for StackSlots","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;K, V&gt; IndexMut&lt;K&gt; for BoxedSlice&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; IndexMut&lt;K&gt; for SecondaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; IndexMut&lt;K&gt; for PrimaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; IndexMut&lt;usize&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()