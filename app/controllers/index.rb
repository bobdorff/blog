get '/' do
  erb :'/index'
end

get '/about' do
  if request.xhr?
  
  else
    erb :'/about'
  end
end

get '/projects' do
  if request.xhr?
  
  else
    erb :'/projects'
  end
end

get '/blog' do
  if request.xhr?
  
  else
    redirect to("https://medium.com/@bobdorff")
  end
end